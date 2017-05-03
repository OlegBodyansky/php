
<div id="page-modal-sender">
    <?php $form = \yii\bootstrap\ActiveForm::begin(['id' => 'contact-form']); ?>
    <?= $form->field($model, 'email') ?>
    <?=\yii\helpers\Html::hiddenInput('ContactForm[source]',$source)?>
    <?= $form->field($model, 'subject')->textInput(['value'=>'I found error']) ?>

    <?= $form->field($model, 'body')->textarea(['rows' => 6, 'placeholder'=>'Describe error']) ?>

    <div class="form-group">
        <?= \yii\helpers\Html::submitButton('Submit', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
    </div>

    <?php \yii\bootstrap\ActiveForm::end(); ?>
</div>