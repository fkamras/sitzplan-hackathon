defmodule Sitzplan.Repo.Migrations.MultipleFilesPerMap do
  use Ecto.Migration

  def change do
    alter table(:maps) do
      remove :file

      add :files, {:array, :string}
    end
  end
end
