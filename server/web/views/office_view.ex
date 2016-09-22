defmodule Sitzplan.OfficeView do
  use Sitzplan.Web, :view

  def render("index.json", %{offices: offices}) do
    %{data: render_many(offices, Sitzplan.OfficeView, "office.json")}
  end

  def render("show.json", %{office: office}) do
    %{data: render_one(office, Sitzplan.OfficeView, "office.json")}
  end

  def render("office.json", %{office: office}) do
    %{id: office.id,
      name: office.name}
  end
end
