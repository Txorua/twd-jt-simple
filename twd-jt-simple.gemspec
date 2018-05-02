# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "twd-jt-simple"
  spec.version       = "0.1.0"
  spec.authors       = ["Iñaki García Blasco"]
  spec.email         = ["inaki@txorua.com"]

  spec.summary       = "Jekyll Theme."
  spec.homepage      = "https://github.com/Txorua/twd-jt-simple."
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
