<?php

use App\Http\Controllers\ExperienceController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/submit', function () {
    return Inertia::render('Submit');
});

Route::get('/experiences', [ExperienceController::class, 'index'])->name('experiences.index');
Route::post('/experiences', [ExperienceController::class, 'store'])->name('experiences.store');

