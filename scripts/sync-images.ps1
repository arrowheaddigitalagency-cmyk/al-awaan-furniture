# Sync images from Home Place Interiors_files into web/public/images
# Run from project root: .\web\scripts\sync-images.ps1

$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$src = Join-Path $root "Home Place Interiors_files"
$dst = Join-Path $root "web\public\images"

if (-not (Test-Path $src)) {
  Write-Error "Source folder not found: $src"
  exit 1
}

$map = @{
  "Media Wall TV Units" = "tv-units"
  "Wardrobes & Walk in Closets" = "cupboards"
  "Curtains" = "curtains"
  "Kids Furniture" = "kids-rooms"
  "Beds with Wall Panels" = "wall-paneling"
  "Beside Tables & Night Stands" = "dressing-tables"
}

foreach ($folder in $map.Keys) {
  $sourcePath = Join-Path $src $folder
  $target = Join-Path $dst "services\$($map[$folder])"
  New-Item -ItemType Directory -Force -Path $target | Out-Null
  Get-ChildItem $sourcePath -Filter *.jpg | Copy-Item -Destination $target -Force
}

$beds = Join-Path $src "Beds with Wall Panels"
@("sofas-beds", "upholstery", "dp-closing", "gaming-rooms", "tv-drawers") | ForEach-Object {
  $t = Join-Path $dst "services\$_"
  New-Item -ItemType Directory -Force -Path $t | Out-Null
  Get-ChildItem $beds -Filter *.jpg | Copy-Item -Destination $t -Force
}

$kids = Join-Path $src "Kids Furniture"
$girls = Join-Path $dst "services\girls-rooms"
New-Item -ItemType Directory -Force -Path $girls | Out-Null
@(
  "IMG-20251223-WA0045.jpg",
  "IMG-20251223-WA0046-933x1024.jpg",
  "IMG-20251223-WA0047-930x1024.jpg",
  "IMG-20251223-WA0048-935x1024.jpg",
  "IMG-20251223-WA0049-931x1024.jpg"
) | ForEach-Object {
  Copy-Item (Join-Path $kids $_) $girls -Force -ErrorAction SilentlyContinue
}

$proj = Join-Path $dst "projects"
New-Item -ItemType Directory -Force -Path $proj | Out-Null
Get-ChildItem $src -Recurse -Filter *.jpg | Copy-Item -Destination $proj -Force

$hero = Join-Path $dst "hero"
New-Item -ItemType Directory -Force -Path $hero | Out-Null
Copy-Item "$dst\services\tv-units\IMG-20251223-WA0110.jpg" "$hero\hero-main.jpg" -Force
Copy-Item "$dst\services\wall-paneling\IMG-20251223-WA0061.jpg" "$hero\hero-bedroom.jpg" -Force
Copy-Item "$dst\services\cupboards\IMG-20251223-WA0101.jpg" "$hero\hero-wardrobe.jpg" -Force

$count = (Get-ChildItem $dst -Recurse -File | Measure-Object).Count
Write-Host "Synced $count images to $dst"
