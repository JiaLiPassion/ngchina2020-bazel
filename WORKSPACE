# Bazel workspace created by @bazel/create 0.38.1
# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "angular_bazel_architect",
    managed_directories = {
        "@npm": ["node_modules"],
    },
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "f2194102720e662dbf193546585d705e645314319554c6ce7e47d8b59f459e9c",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.2.2/rules_nodejs-2.2.2.tar.gz"],
)

# The yarn_install rule runs yarn anytime the package.json or yarn.lock file changes.
# It also extracts and installs any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    data = ["//:patches/@angular-devkit+architect-cli+0.900.1.patch"],
    package_json = "//:package.json",
    # Turn off symlink_node_modules here as it causes extreme flakiness on buildkite
    # macos CI with missing files in node_modules.
    # TODO: track down the root cause of the flakiness; it may be something to
    # do with how the Bazel team has setup their macos virtualization.
    symlink_node_modules = False,
    yarn_lock = "//:yarn.lock",
)
