defmodule Sitzplan.UserView do
  use Sitzplan.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Sitzplan.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Sitzplan.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      work_title: user.work_title,
      mapx: user.mapx,
      mapy: user.mapy,
      phone: user.phone,
      email: user.email,
      social: user.social,
      quote: user.quote,
      map_id: user.map_id}
  end
end
