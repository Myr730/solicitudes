exports.up = (pgm) => {
  pgm.addColumn('users', {
    phone: {
      type: 'varchar(20)'
      // nullable: no se escribe notNull ni default
    }
  })
}

exports.down = (pgm) => {
  pgm.dropColumn('users', 'phone')
}