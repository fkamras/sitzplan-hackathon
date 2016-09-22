defmodule Sitzplan.Department do
  use Sitzplan.Web, :model

  schema "departments" do
    field :name, :string
    belongs_to :department, Sitzplan.Department

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end
end
