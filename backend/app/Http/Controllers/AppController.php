<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Carbon\Carbon; //valida a data de nascimento
use App\Services\DatabaseFake; // Importa a databasefake

class AppController extends Controller
{
    private $databaseFake;

    public function __construct()
    {
        $this->databaseFake = new DatabaseFake();
    }

    public function acessar(Request $request)
    {
        
        $email = $request->input('email');
        $senha = $request->input('senha');

        // Procura no DatabaseFake
        $user = $this->databaseFake->findUser($email, $senha);
        if ($user) {
            //gerar token pelo JWT,por exemplo, seria o ideal, mas para simplificar, retornamos o e-mail como "token"
            //caso exista retorna status 200
            return response()->json([
                'ok' => true,
                'user' => $email, // Retorna o e-mail como "token" simples
                'status' => 200,
                'message' => 'Autenticação realizada!'
            ], 200);
        }
        // retorna status 401 caso não exista
        return response()->json([
            'ok' => false,
            'status' => 401,
            'message' => 'E-mail ou senha inválidos.'
        ], 401);
    }

    public function registrar(Request $request)
    {
        $email = $request->input('email');
        $senha = $request->input('senha');
        $dt_nascimento = $request->input('dt_nascimento');

        // Validação de Idade (Maior de 18)
        $idade = Carbon::parse($dt_nascimento)->age;
        if ($idade < 18) {
            return response()->json([
                'ok' => false,
                'status' => 403,
                'message' => 'Usuário deve ser maior de 18 anos.'
            ], 400);
        }

        //  Validação de E-mail Único 
        if ($this->databaseFake->VerifyEmail($email)) {
            return response()->json([
                'ok' => false,
                'status' => 409,
                'message' => 'Este e-mail já está registrado.'
            ], 409);
        }

        // Inserção Fictícia (Na prática, salvaríamos no BD aqui)
        $this->databaseFake->addNewUser($email, $dt_nascimento, $senha);
        //retorna json se usuario for inserido com sucesso
        return response()->json([
            'ok' => true,
            'message' => 'Usuário registrado com sucesso!'
        ], 201);
    }

    public function listarUsuarios()
    {
    // Retorna a lista fictícia formatada em JSON
    return response()->json($this->databaseFake->getAllUsers(), 200);
    }
}
