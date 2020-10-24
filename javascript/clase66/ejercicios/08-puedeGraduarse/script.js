// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false