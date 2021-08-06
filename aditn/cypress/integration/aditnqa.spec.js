describe('User menuju ke halaman login dengan memasukkan Link Siakad Polinema', () => {
    it('Cek halaman berhasil diakses atau tidak', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Tes User masuk dengan NIM yang valid dan Password tidak valid', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710149')
        cy.get('#password').type('ashiap25')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
    });

    it('Tes User tidak dapat login dengan NIM yang valid dan Kata Sandi yang tidak valid', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('nugroho')
        cy.get('#password').type('berkaryamuda')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
    });


    it('Tes User klik checkbox untuk menampilkan Password yang diinputkan', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710149')
        cy.get('#password').type('ashiap25')
        cy.get('[type="checkbox"]').click()
    });

    
    it('Tes User masuk dengan mengkosongkan NIM dan Password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi')
    });

    it('Tes User masuk dengan mengkosongkan NIM namun Password diisi', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').clear()
        cy.get('#password').type('ashiap25')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi')

    });

    it('Tes User masuk dengan mengisikan NIM namun Password dikosongkan', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710149')
        cy.get('#password').clear()
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Password harus diisi')
    });
    
    it('Cek Link Reset Password Ada', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.contains('Lupa Password?')
        
    });

    it('Tes User masuk dengan NIM valid dan Password valid (Sengaja Password salah utk keamanan akun)', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710149')
        cy.get('#password').type('welcomeback') //Password sengaja tidak dibenarkan utk mencegah pembobolan akun
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')

    });
});