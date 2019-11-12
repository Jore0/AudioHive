class Api::CommentsController < ApplicationController

  def index 
    @comments = Comment.all.where(song_id: params[:song_id])
    render :index
  end 


  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render "api/comments/show"
    else 
      render json: @comment.errors.full_messages, status: 422
    end
  end 

      def destroy 
        #backend protection
        @comment = current_user.comments.find(params[:id])
        if @comment
            @comment.destroy
        else 
            render json: ["404 not found"], status: 422
        end 
    end 



    private 
    def comment_params
        params.require(:comment).permit(:body, :song_time, :song_id, :parent_comment_id)
    end 


end 