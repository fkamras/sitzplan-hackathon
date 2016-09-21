defmodule Sitzplan.Repo.Migrations.CreateDepartment do
  use Ecto.Migration

  def change do
    create table(:departments) do
      add :name, :string, null: false
      add :department_id, references(:departments, on_delete: :nothing)

      timestamps()
    end

    create index(:departments, [:department_id])
    create unique_index(:departments, [:name])
  end
end
