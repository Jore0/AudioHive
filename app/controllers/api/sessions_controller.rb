class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])

        if @user 
            login(@user)
            render "api/users/show"
        else 
            render json: ["Invalid username/password combination"], status: 401
        end 
    end 

    def destroy 
        @user = current_user
        if @user
            logout
            render json: {}
        else 
            render json: ["Nobody signed in"], status: 404
        end 
    end 

    def validate_email
        @user= User.find_by(email: params[:user][:email])

        if @user
            render json: {email: @user.email, formType: "login"}, status: 200
        else 
            if is_email?(params[:user][:email])
                render json: {email: params[:user][:email], formType: "signup" }
            else
                render json: ["Enter a valid email."], status: 422
            end 
        end 
    end 

    def is_email?(email)
        email.include?("@") && email.include?(".") && email.count("@") == 1
    end 

end
