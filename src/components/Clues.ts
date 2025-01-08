export const CluesLevelOne = [
    "Hello, I am the Nexus. I am here to help you.",
    "You have entered the first level.",
    "Here you can see a 5*3 grid of switches.",
    "You can toggle the switches by clicking on them.",
    "The switches glow yellow when turned on and grey when turned off.",
    "The switches needs to be turned on in a specific pattern. Look for clues in the CANVAS.",
    "Good luck.",
]

export const CluesLevelTwo = [
    "Congratulations on completing the first level.",
    "This is much more challenging.",
    "You need to match the letters in a particular way.",
    "The numbers are the key.",
    "The number and a pair of letters are related in some way.",
    "Good luck.",

]
export const CluesLevelThree = [
    "You did it!",
    "Watch out for the next level.",
    "It's going to be a tough one.",
    "There is a 8x8 grid containing black and white cells.",
    "Think what is the code behind this specific arrangement.",
    "As always there is a clue on your screen.",
    "Think, Why 8? Why Black and White? "
]

export const CluesLevelFour = [
    "You are on a roll!",
    "This level is going to be a bit tricky. I call it THE HEADACHE FUEL",
    "You see three images on the screen. In some way you have to find the ACCESS CODE from these images.",
    "Think beneath the surface.",
    "As always, Good luck.",
]
export const CluesLevelFive = [
    "You proved yourself to be a great detective.",
    "Let's take it up a notch.",
    "Explore the terminal infront of you. Think Low Level",
]
export const TerminalOutputs = {
    readelfUsage: `

    Options are:
  -h --file-header       Display the ELF file header
  -l --program-headers   Display the program headers
  -S --section-headers   Display the sections' header
  -g --section-groups    Display the section groups
  -p --string-dump=<name> Dump the contents of section <number|name> as strings
  `,
  readElfHeader: `
  ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              DYN (Position-Independent Executable file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x1060
  Start of program headers:          64 (bytes into file)
  Start of section headers:          13968 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Size of program headers:           56 (bytes)
  Number of program headers:         13
  Size of section headers:           64 (bytes)
  Number of section headers:         31
  Section header string table index: 30
  `,
  readElfProgramHeaders: `
 

Elf file type is DYN (Position-Independent Executable file)
Entry point 0x1060
There are 13 program headers, starting at offset 64

Program Headers:
  Type           Offset             VirtAddr           PhysAddr
                 FileSiz            MemSiz              Flags  Align
  PHDR           0x0000000000000040 0x0000000000000040 0x0000000000000040
                 0x00000000000002d8 0x00000000000002d8  R      0x8
  INTERP         0x0000000000000318 0x0000000000000318 0x0000000000000318
                 0x000000000000001c 0x000000000000001c  R      0x1
      [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
  LOAD           0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000628 0x0000000000000628  R      0x1000
  LOAD           0x0000000000001000 0x0000000000001000 0x0000000000001000
                 0x0000000000000185 0x0000000000000185  R E    0x1000
  LOAD           0x0000000000002000 0x0000000000002000 0x0000000000002000
                 0x00000000000000f4 0x00000000000000f4  R      0x1000
  LOAD           0x0000000000002db8 0x0000000000003db8 0x0000000000003db8
                 0x0000000000000258 0x0000000000000260  RW     0x1000
  DYNAMIC        0x0000000000002dc8 0x0000000000003dc8 0x0000000000003dc8
                 0x00000000000001f0 0x00000000000001f0  RW     0x8
  NOTE           0x0000000000000338 0x0000000000000338 0x0000000000000338
                 0x0000000000000030 0x0000000000000030  R      0x8
  NOTE           0x0000000000000368 0x0000000000000368 0x0000000000000368
                 0x0000000000000044 0x0000000000000044  R      0x4
  GNU_PROPERTY   0x0000000000000338 0x0000000000000338 0x0000000000000338
                 0x0000000000000030 0x0000000000000030  R      0x8
  GNU_EH_FRAME   0x0000000000002014 0x0000000000002014 0x0000000000002014
                 0x0000000000000034 0x0000000000000034  R      0x4
  GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000000 0x0000000000000000  RW     0x10
  GNU_RELRO      0x0000000000002db8 0x0000000000003db8 0x0000000000003db8
                 0x0000000000000248 0x0000000000000248  R      0x1

 Section to Segment mapping:
  Segment Sections...
   00
   01     .interp
   02     .interp .note.gnu.property .note.gnu.build-id .note.ABI-tag .gnu.hash .dynsym .dynstr .gnu.version .gnu.version_r .rela.dyn .rela.plt
   03     .init .plt .plt.got .plt.sec .text .fini
   04     .rodata .eh_frame_hdr .eh_frame
   05     .init_array .fini_array .dynamic .got .data .bss
   06     .dynamic
   07     .note.gnu.property
   08     .note.gnu.build-id .note.ABI-tag
   09     .note.gnu.property
   10     .eh_frame_hdr
   11
   12     .init_array .fini_array .dynamic .got
   `,
   readElfSectionHeaders: `
There are 31 section headers, starting at offset 0x3690:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .interp           PROGBITS         0000000000000318  00000318
       000000000000001c  0000000000000000   A       0     0     1
  [ 2] .note.gnu.pr[...] NOTE             0000000000000338  00000338
       0000000000000030  0000000000000000   A       0     0     8
  [ 3] .note.gnu.bu[...] NOTE             0000000000000368  00000368
       0000000000000024  0000000000000000   A       0     0     4
  [ 4] .note.ABI-tag     NOTE             000000000000038c  0000038c
       0000000000000020  0000000000000000   A       0     0     4
  [ 5] .gnu.hash         GNU_HASH         00000000000003b0  000003b0
       0000000000000024  0000000000000000   A       6     0     8
  [ 6] .dynsym           DYNSYM           00000000000003d8  000003d8
       00000000000000a8  0000000000000018   A       7     1     8
  [ 7] .dynstr           STRTAB           0000000000000480  00000480
       000000000000008f  0000000000000000   A       0     0     1
  [ 8] .gnu.version      VERSYM           0000000000000510  00000510
       000000000000000e  0000000000000002   A       6     0     2
  [ 9] .gnu.version_r    VERNEED          0000000000000520  00000520
       0000000000000030  0000000000000000   A       7     1     8
  [10] .rela.dyn         RELA             0000000000000550  00000550
       00000000000000c0  0000000000000018   A       6     0     8
  [11] .rela.plt         RELA             0000000000000610  00000610
       0000000000000018  0000000000000018  AI       6    24     8
  [12] .init             PROGBITS         0000000000001000  00001000
       000000000000001b  0000000000000000  AX       0     0     4
  [13] .plt              PROGBITS         0000000000001020  00001020
       0000000000000020  0000000000000010  AX       0     0     16
  [14] .plt.got          PROGBITS         0000000000001040  00001040
       0000000000000010  0000000000000010  AX       0     0     16
  [15] .plt.sec          PROGBITS         0000000000001050  00001050
       0000000000000010  0000000000000010  AX       0     0     16
  [16] .text             PROGBITS         0000000000001060  00001060
       0000000000000116  0000000000000000  AX       0     0     16
  [17] .fini             PROGBITS         0000000000001178  00001178
       000000000000000d  0000000000000000  AX       0     0     4
  [18] .rodata           PROGBITS         0000000000002000  00002000
       0000000000000012  0000000000000000   A       0     0     4
  [19] .eh_frame_hdr     PROGBITS         0000000000002014  00002014
       0000000000000034  0000000000000000   A       0     0     4
  [20] .eh_frame         PROGBITS         0000000000002048  00002048
       00000000000000ac  0000000000000000   A       0     0     8
  [21] .init_array       INIT_ARRAY       0000000000003db8  00002db8
       0000000000000008  0000000000000008  WA       0     0     8
  [22] .fini_array       FINI_ARRAY       0000000000003dc0  00002dc0
       0000000000000008  0000000000000008  WA       0     0     8
  [23] .dynamic          DYNAMIC          0000000000003dc8  00002dc8
       00000000000001f0  0000000000000010  WA       7     0     8
  [24] .got              PROGBITS         0000000000003fb8  00002fb8
       0000000000000048  0000000000000008  WA       0     0     8
  [25] .data             PROGBITS         0000000000004000  00003000
       0000000000000010  0000000000000000  WA       0     0     8
  [26] .bss              NOBITS           0000000000004010  00003010
       0000000000000008  0000000000000000  WA       0     0     1
  [27] .comment          PROGBITS         0000000000000000  00003010
       0000000000000026  0000000000000001  MS       0     0     1
  [28] .symtab           SYMTAB           0000000000000000  00003038
       0000000000000360  0000000000000018          29    18     8
  [29] .strtab           STRTAB           0000000000000000  00003398
       00000000000001dc  0000000000000000           0     0     1
  [30] .shstrtab         STRTAB           0000000000000000  00003574
       000000000000011a  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), I (info),
  L (link order), O (extra OS processing required), G (group), T (TLS),
  C (compressed), x (unknown), o (OS specific), E (exclude),
  D (mbind), l (large), p (processor specific)
   `,
    readElfSectionGroups: `
    There are no section groups in this file.
    `,
    stringDump: {
        interp: `
            String dump of section '.interp':
            [     0]  /lib64/ld-linux-x86-64.so.2
        `,
        "note.ABI-tag": `
            String dump of section '.note.ABI-tag':
            [     c]  GNU
        `,
        "gnu.hash": `
            String dump of section '.gnu.hash':
            [    21]  e�m
        `,
        dynsym: `
            String dump of section '.dynsym':
            [    30]  J
            [    34]
            [    48]  "
            [    60]  f
            [    64]
            [    78]  u
            [    7c]
            [    94]  "
        `,
        dynstr: `
            String dump of section '.dynstr':
            [     1]  __libc_start_main
            [    13]  __cxa_finalize
            [    22]  printf
            [    29]  libc.so.6
            [    33]  GLIBC_2.2.5
            [    3f]  GLIBC_2.34
            [    4a]  _ITM_deregisterTMCloneTable
            [    66]  __gmon_start__
            [    75]  _ITM_registerTMCloneTable
        `,
        "gnu.version": `
            String dump of section '.gnu.version':
            No strings found in this section.
        `,
        "gnu.version_r": `
            String dump of section '.gnu.version_r':
            [     4]  )
            [    10]  u^Zi^I
            [    18]  3
            [    28]  ?
        `,
        "rela.dyn": `
            String dump of section '.rela.dyn':
            [     1]  =
            [    10]  @^Q
            [    19]  =
            [    31]  @
            [    41]  @
            [    49]  ?
            [    61]  ?
            [    79]  ?
            [    91]  ?
            [    a9]  ?
        `,
        "rela.plt": `
            String dump of section '.rela.plt':
            [     1]  ?
        `,
        init: `
            String dump of section '.init':
            [     4]  H��^HH�^E�/
            [     f]  H��t^B��H��^H�
        `,
        plt: `
            String dump of section '.plt':
            [     1]  5�/
            [     7]  %�/
            [     e]  @
            [    14]  h
            [    1e]  f�
        `,
        "plt.got": `
            String dump of section '.plt.got':
            [     5]  %�/
            [     a]  f^O^_D
        `,
        "plt.sec": `
            String dump of section '.plt.sec':
            [     5]  %v/
            [     a]  f^O^_D
        `,
        text: `
            String dump of section '.text':
            [     4]  1�I��^H��H���PTE1�1�H�=�
            [    21]  S/
            [    26]  f.^O^_�
            [    30]  H�=y/
            [    37]  H�^Er/
            [    3e]  H9�t^UH�^E6/
            [    4a]  H��t^I��^O^_�
            [    60]  H�=I/
            [    67]  H�5B/
            [    6e]  H)�H��H��?H��^CH^A�H��t^TH�^E^E/
            [    8b]  H��t^H��f^O^_D
            [    a5]  =^E/
            [    ab]  u+UH�=�.
            [    b6]  H��t^LH�=�.
            [    c8]  d����^E�.
            [    d3]  ]�^O^_
            [    e5]  w����^O^^�UH��H�^E�^N
            [    f8]  H��H�^E�^N
            [   102]  H��
            [   114]  ]�
        `,
        fini: `
            String dump of section '.fini':
            [     4]  H��^HH��^H�
        `,
        rodata: `
            String dump of section '.rodata':
            [     4]  YOUFOUNDME
            [     f]  %s
        `,
        eh_frame_hdr: `
            String dump of section '.eh_frame_hdr':
            [     3]  ;0
            [    10]  d
            [    14]  ,����
            [    1c]  <����
            [    24]  L���L
            [    2c]  5����
        `,
        eh_frame: `
            String dump of section '.eh_frame':
            [     9]  zR
            [     d]  x^P^A^[^L^G^H�^A
            [    24]  &
            [    29]  D^G^P
            [    30]  $
            [    34]  4
            [    3c]
            [    43]  F^N^XJ^O^Kw^H�
            [    4d]  ?^Z9*3$"
            [    5c]  \
            [    74]  t
            [    90]  q���-
            [    99]  E^N^P�^BC^M^Fd^L^G^H
        `,
        init_array: `
            String dump of section '.init_array':
            [     0]  @^Q
        `,
        fini_array: `
            String dump of section '.fini_array':
            No strings found in this section.
        `,
        dynamic: `
            String dump of section '.dynamic':
            [     8]  )
            [    28]  x^Q
            [    39]  =
            [    59]  =
            [    73]  o
            [    d9]  ?
            [   118]  P^E
            [   153]  o
            [   163]  o
            [   168]   ^E
            [   173]  o
            [   183]  o
            [   193]  o
        `,
        got: `
            String dump of section '.got':
            NOTE: This section has relocations against it, but these have NOT been applied to this dump.
            [     1]  =
            [    18]  0^P
        `,
        data: `
            String dump of section '.data':
            [     9]  @
        `,
        bss: `
            Section '.bss' has no data to dump.
        `,
        comment: `
            String dump of section '.comment':
            [     0]  GCC: (Ubuntu 13.2.0-23ubuntu4) 13.2.0
        `,
        symtab: `
            String dump of section '.symtab':
            [    40]
            [    78]
            [    90]  3
            [    a8]  I
            [    b1]  @
            [    c0]  U
            [    c9]  =
            [    d8]  |
            [    e0]  @^Q
            [    f9]  =
            [   141]
            [   171]  =
            [   189]
            [   1a1]  ?
            [   1cc]
            [   1e0]  I^A
            [   1e4]
            [   1e9]  @
            [   1f8]  '^A
            [   201]  @
            [   210]  .^A
            [   218]  x^Q
            [   228]  4^A
            [   240]  G^A
            [   249]  @
            [   258]  T^A
            [   25c]
            [   270]  c^A
            [   279]  @
            [   288]  p^A
            [   291]
            [   2a9]  @
            [   2b8]  M^A
            [   2c0]  ^
        `,
    },

    
    

}