require 'rails_helper'
feature "User creates a post" do
	before(:each) do
		visit new_user_path
		fill_in "user[username]", with: "lollolol"
		click_button "Log In"
		visit posts_path
	end
	scenario "successfully creates a new post" do
		fill_in "post[content]", with: "Tick tock motherfucker"
		click_button "Post a message"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "Post added successfully"
		expect(page).to have_content "Tick tock motherfucker"
	end
	scenario "doesn't fill out post field" do
		click_button "Post a message"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "Content can't be blank"
	end
	scenario "doesn't use enough chars in post field" do
		fill_in "post[content]", with: "lol"
		click_button "Post a message"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "Content is too short"
	end
end