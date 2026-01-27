class ExtendedValid extends Valid {
  constructor(email, password) {
    super(email, password);

    this.error_message = "";
  }
  //   validate() {
  //     this.error_message = "";
  //     const passwrd = super.validate();
  //     if (passwrd === false) {
  //       this.error_message = "password error";
  //       return this.isValid;
  //     }
  //     if (this.email.length === 0) {
  //       this.isValid = false;
  //       this.error_message = "email error";
  //       return this.isValid;
  //     }
  //     return this.isValid;
  //   }
  validate() {
    super.validate();

    if (!this.isValid) {
      this.error_message = "password error";
      return this.isValid;
    }

    if (!this.email) {
      this.error_message = "email error";
      this.isValid = false;
      return this.isValid;
    }

    this.error_message = "";
    return this.isValid;
  }
}
