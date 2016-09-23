defmodule Sitzplan.Map do
  use Sitzplan.Web, :model

  schema "maps" do
    field :name, :string
    field :file, :string
    field :floor, :integer
    belongs_to :office, Sitzplan.Office
    has_many :users, Sitzplan.User

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :file, :floor, :office_id])
    |> validate_required([:name, :file, :floor, :office_id])
    |> foreign_key_constraint(:office_id)
  end
end
