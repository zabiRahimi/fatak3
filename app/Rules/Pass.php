<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Pass implements Rule
{
     /**
     * با توجه به خطایی ایجاد شده یکی پیام مرتبط را آماده ارسال می کند
     *
     * @var [type]
     */
    private $whichSendMessage;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (!preg_match('/^[A-Za-z0-9_]+$/',$value)) {
            $this->whichSendMessage=1;
            return false;
        }elseif (preg_match('/\s/',$value)) {
            $this->whichSendMessage=2;
            return false;
        }elseif (strlen($value) < 6) {
            $this->whichSendMessage=3;
            return false;
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        switch ($this->whichSendMessage) {
            case 1:
                return 'فقط حروف لاتین، اعداد و کارکتر _ مجاز هستند';
                break;
            case 2:
                return 'رمز عبور نباید حاوی فضای خالی باشد';
                break;
            case 3:
                return 'رمز عبور باید شش حرف یا بیشتر باشد';
                break;
        }
    }
}
