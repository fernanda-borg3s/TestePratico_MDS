<?php

namespace App\Services;

class DatabaseFake
{
    // Simulação de um banco de dados fictício
    private $usuarios = [
        ['email' => 'alice@email.com', 'dt_nascimento' => '03-02-1999', 'senha' => 'senha123'],
        ['email' => 'marcos@email.com', 'dt_nascimento' => '15-05-2000', 'senha' => 'senha456'],
        ['email' => 'lia658@email.com', 'dt_nascimento' => '13-07-1990', 'senha' => 'senha789'],
        ['email' => 'teste@email.com', 'dt_nascimento' => '28-10-2002', 'senha' => 'senha111'],
    ];

    // Retorna o usuário se encontrado, ou null se não.
    public function findUser($email, $senha)
    {
        // Aqui seria uma consulta real ao banco: User::where('email', $email)->where('password', Hash::check($senha))->first())
        foreach ($this->usuarios as $usuario) {
            if ($usuario['email'] === $email && $usuario['senha'] === $senha) {
                return $usuario;
            }
        }
        return null;
    }

    /**
     * Simula a verificação se um email já está registrado.
     * Retorna true se registrado, false caso contrário.
     */
    public function VerifyEmail($email)
    {
        // Aqui seria uma consulta real ao banco, ex.: User::where('email', $email)->exists())
        foreach ($this->usuarios as $usuario) {
            if ($usuario['email'] === $email) {
                return true;
            }
        }
        return false;
    }

    //Simula a adição de um novo usuário.

    public function addNewUser($email, $dtNascimento, $senha)
    {
       // Sempre simula sucesso para teste (adiciona ao array fictício)
        $this->usuarios[] = ['email' => $email, 'dt_nascimento' => $dtNascimento, 'senha' => $senha];
        return true;
    }

     //Retorna um array de usuários.
    public function getAllUsers()
    {
        // Retorna o array fictício sem senhas
        return array_map(function ($usuario) {
            return ['email' => $usuario['email'], 'dt_nascimento' => $usuario['dt_nascimento']];
        }, $this->usuarios);
        
    }
}