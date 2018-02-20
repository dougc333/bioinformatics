cmake_minimum_required(VERSION 3.6)
project(LANGUAGES CXX CUDA)

include_directories(/usr/local/cuda/include)

set(CMAKE_CXX_STANDARD 11)

set(SOURCE_FILES main.cpp)

add_executable(cuda ${SOURCE_FILES})