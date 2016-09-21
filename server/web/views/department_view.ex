defmodule Sitzplan.DepartmentView do
  use Sitzplan.Web, :view

  def render("index.json", %{departments: departments}) do
    %{data: render_many(departments, Sitzplan.DepartmentView, "department.json")}
  end

  def render("show.json", %{department: department}) do
    %{data: render_one(department, Sitzplan.DepartmentView, "department.json")}
  end

  def render("department.json", %{department: department}) do
    %{id: department.id,
      name: department.name,
      department_id: department.department_id}
  end
end
