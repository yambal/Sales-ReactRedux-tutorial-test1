module API
  class V1 < Grape::API
    format :json

    resource :user do
      desc "Return Hello"
      get :all do
        @users = User.all
        present @users, with: Entities::V1::UserEntity
      end
    end
  end
end
