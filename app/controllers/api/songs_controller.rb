class Api::SongsController < ApplicationController

    def show 
        @song = Song.find(params[:id])
        render :show
    end 


    def index
        @songs = Song.with_attached_song_url.with_attached_album_cover.all
        render :index
    end 
   # Completed 200 OK in 51ms (Views: 45.9ms | ActiveRecord: 4.6ms)
    # Completed 200 OK in 399ms (Views: 299.1ms | ActiveRecord: 95.6ms)
    def create
        @song = Song.new(song_params)
        if @song.save
            render :show
        else 
            render json: @song.errors.full_messages, status: 422
        end 
        
    end

    def destroy 
        #backend protection
        @song = current_user.songs.find(params[:id])
        if @song
            @song.destroy
        else 
            render json: ["404 not found"], status: 422
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