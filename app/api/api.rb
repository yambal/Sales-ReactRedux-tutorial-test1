class API < Grape::API
    format :json

    resource :user do
      desc "Return Hello"
      get :all do
        @user = User.all
        {user:@user}
        #{message: "Hello Grape"}
      end
    end
end
