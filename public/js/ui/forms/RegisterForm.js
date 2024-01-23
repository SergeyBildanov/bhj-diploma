/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    let current = User.current();
    current.register(data, (err, response) => {
      if(response.success === true){
        this.element.reset();
        App.setState( 'user-logged' );
        App.getModal("modal-register").close();
      }
    });
  }
}