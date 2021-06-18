require 'rails_helper'
feature "User log out" do
	before(:each) do 
		visit new_user_path
		fill_in "user[username]", with: "lollolol"
		click_button "Log In"
		visit posts_path
	end
	scenario "has button" do
		expect(page).to have_content "Log out"
	end
	scenario "successfully from account" do
		click_link "Log out"
		expect(current_path).to eq(new_user_path)
	end
end