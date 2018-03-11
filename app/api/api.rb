class API < Grape::API
  format :json

  resource :user do
    desc 'POST /api/user/signin'
    params do
      requires :user
    end
    post '/signin' do
      error!('Cannot find user', 401) unless user = User.find_by(email: params[:user][:email], password: params[:user][:password])
      present user, with: API::UserEntity
    end
  end
end
