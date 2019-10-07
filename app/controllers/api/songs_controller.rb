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
        # debugger
        @song = Song.new(song_params)
        if @song.save
            render :show
        else 
            render json: @song.errors.full_messages, status: 422
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

    def update
        @song = Song.find(params[:id])
        if @song.update(song_params)
            render :show
        else 
            render json: @song.errors.full_messages, status: 422
        end 
    end 


    private 
    def song_params
        params.require(:song).permit(:user_id, :title, :artist, :genre, :release_date, :song_url, :album_cover, :description)
    end 

end