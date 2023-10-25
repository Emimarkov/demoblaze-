import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.texboxes.username.inovoke("val",username);
    }
    static insertPassword(password){
        SignupElements.texboxes.password.inovoke("val",password);
    }
    static ClckOnButton(){
        SignupElements.buttons.signup.click();
    }
    // creamos una lemento que contenga todos los elemento creados anteriormente para reducir el codigo cuando generemos los TC
    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.ClckOnButton();
    }
}