class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html {render :index}
      format.json {render json: @posts}
    end
  end

  def create
    @post = Post.new(params[:post])

    @post.save!

    respond_to do |format|
      # format.html {render}
      format.json {render json: @post}
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      # format.html {render}
      format.json {render json: @post}
    end
  end
end
