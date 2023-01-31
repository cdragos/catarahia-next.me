{ pkgs ? import <nixpkgs> {} }:

let
  nodejs = pkgs.nodejs-18_x;
  yarn = pkgs.yarn;
  vercel = pkgs.nodePackages.vercel;
in

pkgs.stdenv.mkDerivation {
  name = "catarahia-next.com";
  buildInputs = [ nodejs yarn vercel];
  shellHook = ''
    export PATH="$nodejs/bin:$yarn/bin:$PATH"
  '';
}
