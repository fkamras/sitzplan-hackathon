defmodule Sitzplan.Repo.Migrations.DeleteDepartmentsTable do
  use Ecto.Migration

  def change do
    drop_if_exists index(:users, [:department_id])

    alter table(:users) do
      remove :department_id
    end

    drop_if_exists table(:departments)
  end
end
