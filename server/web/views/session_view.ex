defmodule Sitzplan.SessionView do
  use Sitzplan.Web, :view

  def render("show.json", %{session: session}) do
    %{data: render_one(session, Sitzplan.SessionView, "session.json")}
  end

  def render("session.json", %{session: session}) do
    %{user_id: session.user_id,
      user: render_one(session.user, Sitzplan.UserView, "user.json")}
  end
end
