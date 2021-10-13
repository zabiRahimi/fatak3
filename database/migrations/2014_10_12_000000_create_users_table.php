<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use phpDocumentor\Reflection\Types\Nullable;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_name')->index()->unique();
            $table->string('mobile',13)->index()->unique();
            $table->timestamp('mobile_verified_at')->nullable();
            $table->string('email')->index()->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('api_token')->unique();
            $table->boolean('admin')->nullable()->comment('has account admin');
            $table->boolean('shop')->nullable()->comment('has account shop');
            $table->boolean('channel')->nullable()->comment('has account channel');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
