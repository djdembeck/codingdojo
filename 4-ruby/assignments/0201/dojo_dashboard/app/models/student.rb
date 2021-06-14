class Student < ActiveRecord::Base
  belongs_to :dojo, foreign_key: 'dojo_id'
end
