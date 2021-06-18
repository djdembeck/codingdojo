require 'rails_helper'
feature "User creates a comment" do
	before(:each) do
		visit new_user_path
		fill_in "user[username]", with: "lollolol"
		click_button "Log In"
		visit posts_path
		fill_in "post[content]", with: "Tick tock motherfucker"
		click_button "Post a message"
	end
	scenario "successfully creates a new comment" do
		fill_in "comment[content]", with: "Tick tock motherfucker"
		click_button "Comment"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "Comment added successfully"
		expect(page).to have_content "Tick tock motherfucker"
	end
	scenario "doesn't fill out comment field" do
		click_button "Comment"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "Content can't be blank"
	end
	scenario "doesn't use enough chars in comment field" do
		fill_in "comment[content]", with: "lol"
		click_button "Comment"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "Content is too short"
	end
end