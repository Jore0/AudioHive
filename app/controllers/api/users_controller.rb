class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show" 
        else 
            render json: ['Please Fill In All Credintials Correctly '], status: 422
        end 
    end 

    def show 
        @user = User.find(params[:id])
        if @user 
            render "api/users/show" 
        else 
             render json: ['Profile doesnt exist'], status: 422
        end 
    end 

    def update  
        @user = User.find(params[:user][:id])
        if @user.update(user_params)
            render "api/users/show" 
        else 
             render json: ['Profile doesnt exist'], status: 422
        end 
    end 


    def user_params
        params.require(:user).permit(:username, :password, :email, :image_url)
    end 
end
