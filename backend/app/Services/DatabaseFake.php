<?php

namespace App\Services;

class DatabaseFake
{
    // simulação de um banco de dados fictício
    private $usuarios = [
        ['email' => 'alice@gov.br', 'dt_nascimento' => '1999-03-15', 'senha' => 'senha123'],
        ['email' => 'marcos@gov.br', 'dt_nascimento' => '2000-05-15', 'senha' => 'senha456'],
        ['email' => 'lia658@gov.br', 'dt_nascimento' => '1990-07-13', 'senha' => 'senha789'],
        ['email' => 'teste@gov.br', 'dt_nascimento' => '2002-10-28', 'senha' => 'senha111'],
    ];

    // Retorna o usuário se encontrado, ou null se não.
    public function findUser($email, $senha)
    {
        // aqui seria uma consulta real ao banco: User::where('email', $email)->where('password', Hash::check($senha))->first())
        foreach ($this->usuarios as $usuario) {
            if ($usuario['email'] === $email && $usuario['senha'] === $senha) {
                return $usuario;
            }
        }
        return null;
    }

    
     //simula a verificação se um email já está registrado.
    //retorna true se registrado, falso caso contrário.
     
    public function VerifyEmail($email)
    {
        // aqui seria uma consulta real ao banco, ex.: User::where('email', $email)->exists())
        foreach ($this->usuarios as $usuario) {
            if ($usuario['email'] === $email) {
                return true;
            }
        }
        return false;
    }

    //simula a adição de um novo usuário.
    public function addNewUser($email, $dtNascimento, $senha)
    {
        $this->usuarios[] = ['email' => $email, 'dt_nascimento' => $dtNascimento, 'senha' => $senha];
        return true;
    }

    public function getAllUsers()
    {
        // Retorna o array fictício sem senhas
        return array_map(function ($usuario) {
            return ['email' => $usuario['email'], 'dt_nascimento' => $usuario['dt_nascimento']];
        }, $this->usuarios);
        
    }
}