class GamesController < ApplicationController
  def index
  end

  def new
  end

  def create
    
    params.require(:clickCount).permit(:clickCount).merge(user_id: current_user.id)
  end

end
