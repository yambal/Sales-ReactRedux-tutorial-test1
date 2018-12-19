module Entities
  module V1
    class UserEntity < Grape::Entity
      root 'users', 'user'
      expose :name, as:"name"
    end
  end
end
