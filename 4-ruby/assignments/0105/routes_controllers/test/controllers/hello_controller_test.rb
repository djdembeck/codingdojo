require 'test_helper'

class HelloControllerTest < ActionController::TestCase
  test "should get Say" do
    get :Say
    assert_response :success
  end

  test "should get Times" do
    get :Times
    assert_response :success
  end

end
