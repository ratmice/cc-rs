var N=null,E="",T="t",U="u",searchIndex={};
var R=["command","option","vsvers","string","build","result","Configures the optimization level of the generated object…","asref","error","Run the compiler, generating the file `output`","Get the compiler that's in use for this configuration.","osstring","to_owned","clone_into","try_from","try_into","borrow_mut","type_id","cc::windows_registry","formatter"];
searchIndex["cc"]={"doc":"A library for build scripts to compile custom C code","i":[[3,"Build","cc","A builder for compilation of a native static library.",N,N],[3,"Error",E,"Represents an internal error that occurred, with an…",N,N],[3,"Tool",E,"Configuration used to represent an invocation of a C…",N,N],[0,"windows_registry",E,"A helper module to probe the Windows Registry when looking…",N,N],[4,"VsVers",R[18],"A version of Visual Studio",N,N],[13,"Vs12",E,"Visual Studio 12 (2013)",0,N],[13,"Vs14",E,"Visual Studio 14 (2015)",0,N],[13,"Vs15",E,"Visual Studio 15 (2017)",0,N],[13,"Vs16",E,"Visual Studio 16 (2019)",0,N],[5,"find",E,"Attempts to find a tool within an MSVC installation using…",N,[[["str"]],[[R[0]],[R[1],[R[0]]]]]],[5,"find_tool",E,"Similar to the `find` function above, this function will…",N,[[["str"]],[[R[1],["tool"]],["tool"]]]],[5,"find_vs_version",E,"Find the most recent installed version of Visual Studio",N,[[],[[R[5],[R[2],R[3]]],[R[2]],[R[3]]]]],[11,"new","cc","Construct a new instance of a blank set of configuration.",1,[[],[R[4]]]],[11,"include",E,"Add a directory to the `-I` or include path for headers",1,[[["self"],[R[7],["path"]],["path"]],[R[4]]]],[11,"define",E,"Specify a `-D` variable with an optional value.",1,[[["self"],[R[1],["str"]],["str"],["into",[R[1]]]],[R[4]]]],[11,"object",E,"Add an arbitrary object file to link in",1,[[["self"],[R[7],["path"]],["path"]],[R[4]]]],[11,"flag",E,"Add an arbitrary flag to the invocation of the compiler",1,[[["self"],["str"]],[R[4]]]],[11,"is_flag_supported",E,"Run the compiler to test if it accepts the given flag.",1,[[["self"],["str"]],[[R[5],["bool",R[8]]],[R[8]],["bool"]]]],[11,"flag_if_supported",E,"Add an arbitrary flag to the invocation of the compiler if…",1,[[["self"],["str"]],[R[4]]]],[11,"shared_flag",E,"Set the `-shared` flag.",1,[[["self"],["bool"]],[R[4]]]],[11,"static_flag",E,"Set the `-static` flag.",1,[[["self"],["bool"]],[R[4]]]],[11,"no_default_flags",E,"Disables the generation of default compiler flags. The…",1,[[["self"],["bool"]],[R[4]]]],[11,"file",E,"Add a file which will be compiled",1,[[["self"],[R[7],["path"]],["path"]],[R[4]]]],[11,"files",E,"Add files which will be compiled",1,[[["self"],["p"]],[R[4]]]],[11,"cpp",E,"Set C++ support.",1,[[["self"],["bool"]],[R[4]]]],[11,"cuda",E,"Set CUDA C++ support.",1,[[["self"],["bool"]],[R[4]]]],[11,"warnings_into_errors",E,"Set warnings into errors flag.",1,[[["self"],["bool"]],[R[4]]]],[11,"warnings",E,"Set warnings flags.",1,[[["self"],["bool"]],[R[4]]]],[11,"extra_warnings",E,"Set extra warnings flags.",1,[[["self"],["bool"]],[R[4]]]],[11,"cpp_link_stdlib",E,"Set the standard library to link against when compiling…",1,[[["self"],["into",[R[1]]],[R[1],["str"]]],[R[4]]]],[11,"cpp_set_stdlib",E,"Force the C++ compiler to use the specified standard…",1,[[["self"],["into",[R[1]]],[R[1],["str"]]],[R[4]]]],[11,"target",E,"Configures the target this configuration will be compiling…",1,[[["self"],["str"]],[R[4]]]],[11,"host",E,"Configures the host assumed by this configuration.",1,[[["self"],["str"]],[R[4]]]],[11,"opt_level",E,R[6],1,[[["self"],["u32"]],[R[4]]]],[11,"opt_level_str",E,R[6],1,[[["self"],["str"]],[R[4]]]],[11,"debug",E,"Configures whether the compiler will emit debug…",1,[[["self"],["bool"]],[R[4]]]],[11,"out_dir",E,"Configures the output directory where all object files and…",1,[[["self"],[R[7],["path"]],["path"]],[R[4]]]],[11,"compiler",E,"Configures the compiler to be used to produce output.",1,[[["self"],[R[7],["path"]],["path"]],[R[4]]]],[11,"archiver",E,"Configures the tool used to assemble archives.",1,[[["self"],[R[7],["path"]],["path"]],[R[4]]]],[11,"cargo_metadata",E,"Define whether metadata should be emitted for cargo…",1,[[["self"],["bool"]],[R[4]]]],[11,"pic",E,"Configures whether the compiler will emit position…",1,[[["self"],["bool"]],[R[4]]]],[11,"use_plt",E,"Configures whether the Procedure Linkage Table is used for…",1,[[["self"],["bool"]],[R[4]]]],[11,"static_crt",E,"Configures whether the /MT flag or the /MD flag will be…",1,[[["self"],["bool"]],[R[4]]]],[11,"try_compile",E,R[9],1,[[["self"],["str"]],[[R[5],[R[8]]],[R[8]]]]],[11,"compile",E,R[9],1,[[["self"],["str"]]]],[11,"try_expand",E,"This will return a result instead of panicing; see…",1,[[["self"]],[[R[8]],[R[5],["vec",R[8]]],["vec",["u8"]]]]],[11,"expand",E,"Run the compiler, returning the macro-expanded version of…",1,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"get_compiler",E,R[10],1,[[["self"]],["tool"]]],[11,"try_get_compiler",E,R[10],1,[[["self"]],[[R[8]],[R[5],["tool",R[8]]],["tool"]]]],[11,"to_command",E,"Converts this compiler into a `Command` that's ready to be…",2,[[["self"]],[R[0]]]],[11,"path",E,"Returns the path for this compiler.",2,[[["self"]],["path"]]],[11,"args",E,"Returns the default set of arguments to the compiler…",2,[[["self"]]]],[11,"env",E,"Returns the set of environment variables needed for this…",2,[[["self"]]]],[11,"cc_env",E,"Returns the compiler command in format of CC environment…",2,[[["self"]],[R[11]]]],[11,"cflags_env",E,"Returns the compiler flags in format of CFLAGS environment…",2,[[["self"]],[R[11]]]],[11,"is_like_gnu",E,"Whether the tool is GNU Compiler Collection-like.",2,[[["self"]],["bool"]]],[11,"is_like_clang",E,"Whether the tool is Clang-like.",2,[[["self"]],["bool"]]],[11,"is_like_msvc",E,"Whether the tool is MSVC-like.",2,[[["self"]],["bool"]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"],[T]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[14],E,E,1,[[[U]],[R[5]]]],[11,R[15],E,E,1,[[],[R[5]]]],[11,"borrow",E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,[[["self"]],["typeid"]]],[11,R[12],E,E,3,[[["self"]],[T]]],[11,R[13],E,E,3,[[["self"],[T]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,"to_string",E,E,3,[[["self"]],[R[3]]]],[11,R[14],E,E,3,[[[U]],[R[5]]]],[11,R[15],E,E,3,[[],[R[5]]]],[11,"borrow",E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,[[["self"]],["typeid"]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[["self"],[T]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[14],E,E,2,[[[U]],[R[5]]]],[11,R[15],E,E,2,[[],[R[5]]]],[11,"borrow",E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,[[["self"]],["typeid"]]],[11,R[12],R[18],E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"],[T]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[14],E,E,0,[[[U]],[R[5]]]],[11,R[15],E,E,0,[[],[R[5]]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,[[["self"]],["typeid"]]],[11,"default","cc",E,1,[[],[R[4]]]],[11,"clone",R[18],E,0,[[["self"]],[R[2]]]],[11,"clone","cc",E,1,[[["self"]],[R[4]]]],[11,"clone",E,E,3,[[["self"]],[R[8]]]],[11,"clone",E,E,2,[[["self"]],["tool"]]],[11,"eq",R[18],E,0,[[["self"],[R[2]]],["bool"]]],[11,"from","cc",E,3,[[[R[8]]],[R[8]]]],[11,"fmt",E,E,3,[[["self"],[R[19]]],[R[5]]]],[11,"fmt",R[18],E,0,[[["self"],[R[19]]],[R[5]]]],[11,"fmt","cc",E,1,[[["self"],[R[19]]],[R[5]]]],[11,"fmt",E,E,3,[[["self"],[R[19]]],[R[5]]]],[11,"fmt",E,E,2,[[["self"],[R[19]]],[R[5]]]]],"p":[[4,"VsVers"],[3,"Build"],[3,"Tool"],[3,"Error"]]};
searchIndex["gcc_shim"]={"doc":E,"i":[],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);