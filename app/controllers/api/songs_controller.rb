class Api::SongsController < ApplicationController

    def show 
        @song = Song.find(params[:id])
        render :show
    end 


    def index
        @songs = Song.all
        render :index
    end 

    def create
        @song = Song.new(song_params)
        @song.user_id = current_user.id
        if @song.save
            render :show
        else 
            render json: @post.errors.full_messages, status: 422
        end 
        
    end

    def destroy 
        @song = Song.find(params[:id])
        if @song.destroy
            render :index 
        else 
            render json: @post.errors.full_messages, status: 422
        end 
    end 


    private 
    def song_params
        params.require(:song).permit(:title, :artist, :genre)
    end 

end