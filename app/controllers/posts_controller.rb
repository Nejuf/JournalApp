class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @posts }
    end
  end

  def create
    @post = Post.new(params[:post])

    @post.save!

    respond_to do |format|
      # format.html {render}
      format.json { render json: @post }
    end
  end

  def show
    @post = Post.find(params[:id]);
    respond_to do |format|
      format.json { render json: @post }
    end
  end

  def edit
    @post = Post.find(params[:id]);

  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(params[:post])
      respond_to do |format|
        format.json { render json: @post }
      end
    else
      respond_to do |format|
        format.json { render json: @post.errors.full_messages, status: 422 }
      end
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      # format.html {render}
      format.json { render json: @post }
    end
  end
end
