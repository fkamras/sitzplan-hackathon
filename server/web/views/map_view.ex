defmodule Sitzplan.MapView do
  use Sitzplan.Web, :view

  def render("index.json", %{maps: maps}) do
    %{data: render_many(maps, Sitzplan.MapView, "map.json")}
  end

  def render("show.json", %{map: map}) do
    %{data: render_one(map, Sitzplan.MapView, "map.json")}
  end

  def render("map.json", %{map: map}) do
    %{id: map.id,
      name: map.name,
      file: map.file,
      floor: map.floor,
      office_id: map.office_id,
      users: render_many(map.users, Sitzplan.UserView, "user.json")}
  end
end
