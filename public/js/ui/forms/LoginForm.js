/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    let current = User.current();
    current.login(data, (err, response) => {
      if(response.success === true){
        this.element.reset();
        App.setState( 'user-logged' );
        App.getModal("modal-login").close();
      }
      console.log(err);
      console.log(response);
    });
  }
}