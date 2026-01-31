<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

Route::post('/acessar', [AppController::class, 'acessar']);
Route::post('/registrar', [AppController::class, 'registrar']);
Route::get('/listagem-usuarios', [AppController::class, 'listarUsuarios']);
