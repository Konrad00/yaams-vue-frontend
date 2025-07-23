<script setup lang="ts">
</script>

<template>
    <h1 class="display-4 mb-4">Fleet overview</h1>
    <p class="lead">Here is a list of all aircraft and their current locations according to their last flight.</p>

    <hr>

    <!-- TODO: add button to add aircraft, if permission 'add aircraft' is set -->
    
    <div class="my-4">
        <h2 class="h4">Current active fleet</h2>

        <table class="table table-sm">
            <thead class="table-dark">
                <tr>
                    <th scope="col" class="text-center">Tail number</th>
                    <th scope="col" class="text-center">Type</th>
                    <th scope="col" class="text-center">Current location</th>
                    <th scope="col" class="text-center">Total logged hours</th>
                    <th scope="col" class="text-center" v-if="false">Actions</th> <!-- TODO: only if permission 'edit aircraft' is set -->
                </tr>
            </thead>
            <tbody>
                <!-- TODO: actual only static data... -->
                <tr>
                    <td class="text-center"><router-link :to="'/airline/fleetmanager/view/' + 'D-ASUN'">D-ASUN</router-link></td>
                    <td class="text-center">Boeing 737-800</td>
                    <td class="text-center">KATL</td>
                    <td class="text-center">1500 hours</td>
                    <td class="text-center" v-if="false">
                        <button class="btn btn-sm btn-primary">Edit</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
</style>