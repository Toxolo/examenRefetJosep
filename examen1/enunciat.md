# Prova 1 (10/11/2025)

1. (2p)
   1. Alça el contenidor mysql. v
   2. Comprova que tot funciona com cal. v
   
   3. Fes les modificacions pertinents per a que l'arxiu docker-compose.yml no continga credencials. v

2. (3p) Implementar l’API d’usuaris
   1. GET /api/users: retorna id, username i role dels usuaris. V

   2. POST /api/users: rep JSON amb username, password i role (user per defecte). V

   3. Comprova els endpoints. V
   
3. (3p) Afegir middleware d’autorització al GET d’usuaris:
   1. Crea un middleware requireAdmin que:
      * Llegisca credencials de la petició. V
      * Comprove a la BD que username i password existeixen i que el role és admin. V
      * Denegue l’accés si no es compleix (respostes 401 o 403 segons corresponga). V 


4. (2p) Si ens feren injecció d'SQL sobre la nostra base de dades podrien obtindre les credencials i accedir a l'endpoint desitjat. V

   1. Saps com mitigar-ho? Explica-ho.

   (recurs consultat: https://www.npmjs.com/package/bcrypt )
   Jo convertiria les passwords a hash utilitzant bcrypt, aixi a la base de dades tampoc es guarda la contraseña real es guarda el seu hash com podria ser $2b$10$nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa,
   lo bo de aço es que el hash cada volta es diferent , que si la contraseña de varios usuaris es josep no tindra ningun el mateix hash, cada volta es diferent. Per a comprobar en el middleware si la contrasenya es correcta farem bcrypt.compare(password, user.password) a on password sera la contrasenya del header 'josep' i user.password sera el hush guardat a la base de datos, si al compararo coinxideixen retornara true, si no false.

   2. Implementa-ho. V
