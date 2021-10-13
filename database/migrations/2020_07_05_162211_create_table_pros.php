<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablePros extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Pros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('shop_id');
            $table->string('typePro',17)->comment('ثابت یا غیر ثابت بودن محصول');
            $table->string('name',100);
            $table->string('maker',70)->nullable();
            $table->string('brand',70)->nullable();
            $table->string('model',60)->nullable();
            $table->string('price',12);
            $table->string('vahed',60);
            $table->string('num',7)->nullable();
            $table->string('vazn',8)->nullable();
            $table->string('vaznPost',8)->nullable();
            $table->boolean('dimension')->comment('ابعاد');
            $table->string('pakat',12)->nullable();
            $table->text('dis')->nullable();
            $table->string('dateMake',12)->nullable();
            $table->string('dateExpiration',12)->nullable();
            $table->text('term')->nullable()->comment('شرایط نگهداری');
            $table->smallInteger('offerOrder')->nullable()->comment('تعدادپیشنهاد محصول');
            $table->smallInteger('bazdid')->nullable();
            $table->smallInteger('numBuy')->nullable()->comment('تعداد فروش محصول');
            $table->integer('date_ad');
            $table->integer('date_up');
            $table->string('seo',5)->comment('مشخص می کند محصول ثابت سئو شده یه خیر');
            $table->boolean('show');
  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Pros');
    }
}
