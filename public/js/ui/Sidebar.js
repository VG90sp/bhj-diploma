/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarClick = document.querySelector('.sidebar-toggle');
    const sidebarMini = document.querySelector('.sidebar-mini');
    sidebarClick.addEventListener('click', (e) => {
      e.preventDefault();
      sidebarMini.classList.toggle('sidebar-open');
      sidebarMini.classList.toggle('sidebar-collapse');
    })

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    let registerModal = App.getModal('register');
    let loginModal = App.getModal('login');

    document.querySelector('.menu-item_register').addEventListener('click', (e) => {
      e.preventDefault();
      registerModal.open();
      })

      document.querySelector('.menu-item_login').addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.open();
      })

      document.querySelector('.menu-item_logout').addEventListener('click', (e) => {
        e.preventDefault();
        User.logout({}, (err, response) => {
          if (response.success) {
            App.setState( 'init' );
          }
        })
      })

  }

}
